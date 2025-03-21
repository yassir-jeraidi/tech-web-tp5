import {zodResolver} from "@hookform/resolvers/zod";
import {useForm, SubmitHandler, ControllerRenderProps, Path, DefaultValues} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {Field} from "@/types";
import {schemas} from "@/lib/zod/schemas";
import {useNavigate} from "react-router-dom";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import logo from "@/assets/images/logo.png";

type SchemaName = keyof typeof schemas;
type SchemaType<T extends SchemaName> = z.infer<(typeof schemas)[T]>;

interface Props<T extends SchemaName> {
    config: {
        title: string;
        description: string;
        submitText: string;
    };
    defaultValues: DefaultValues<SchemaType<T>>;
    schema: T;
    fields: Field[];
    action: (data: SchemaType<T>) => Promise<boolean>;
    children?: React.ReactNode;
}

export default function AuthForm<T extends SchemaName>({
                                                           config,
                                                           defaultValues,
                                                           schema,
                                                           fields,
                                                           action,
                                                           children
                                                       }: Props<T>) {

    const navigate = useNavigate()

    const form = useForm<SchemaType<T>>({
        resolver: zodResolver(schemas[schema]),
        defaultValues
    });

    const handleSubmit: SubmitHandler<SchemaType<T>> = async (data) => {
        const success = await action(data);
        if (success) {
            navigate("/dashboard");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Card className="mx-auto w-[400px]">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl flex justify-center">
                        <img src={logo} alt="app logo"/>
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-6">
                            {fields.map((field) => (
                                <FormField
                                    key={field.name}
                                    control={form.control}
                                    name={field.name as Path<SchemaType<T>>}
                                    render={({field: formField}: {
                                        field: ControllerRenderProps<SchemaType<T>>
                                    }) => (
                                        <FormItem>
                                            <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id={field.name}
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    {...formField}
                                                    value={formField.value ?? ""}
                                                />
                                            </FormControl>
                                            {field.description && (
                                                <FormDescription>{field.description}</FormDescription>
                                            )}
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            ))}
                            <Button type="submit" className="w-full">
                                {config.submitText}
                            </Button>
                        </form>
                    </Form>
                    {
                        children
                    }
                </CardContent>
            </Card>
        </div>
    );
}
