import * as React from "react"
import logo from "@/assets/images/logo.png"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {CloudUploadIcon, LayoutDashboardIcon, LogOutIcon, StoreIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {SidebarFooter} from "@/components/ui/sidebar.tsx";
import {useNavigate} from "react-router-dom";
import {authService} from "@/services/authService.ts";

const data = {
  navMain: [
    {
      title: "Enset Mohammedia dashboard",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
          icon : <LayoutDashboardIcon size={20} />,
          isActive : true
        },
        {
          title: "Products",
          url: "#",
          icon: <StoreIcon size={20} />
        },
        {
          title: "Upload file",
          url : "#",
          icon: <CloudUploadIcon size={20} />
        }
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const navigate = useNavigate();

  const logout = async () => {
    const success = await authService.logout();
    if (success) {
      navigate("/sign-in")
    }
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="w-full logo">
          <img src={logo} alt="app logo" className="mx-auto" width="200"/>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>
                        <span>
                          {
                            item.icon
                          }
                        </span>
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <Button onClick={logout} >
          Logout
          <span><LogOutIcon size={20}/></span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
