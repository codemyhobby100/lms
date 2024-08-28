import { Footer, Navbar } from "@/components";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconHome, IconMail, IconSettings, IconUser } from "@tabler/icons-react";
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const PortalLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            <Sidebar>
                <SidebarBody>
                    <SidebarLink link={{ label: "Dashboard", href: "/dashboard", icon: <IconHome className="text-white"/> }} />
                    <SidebarLink link={{ label: "Profile", href: "/profile", icon: <IconUser /> }} />
                    <SidebarLink link={{ label: "Messages", href: "/messages", icon: <IconMail /> }} />
                    <SidebarLink link={{ label: "Settings", href: "/settings", icon: <IconSettings /> }} />
                </SidebarBody>
            </Sidebar>
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="p-4 flex-1 overflow-y-auto">
                    {children}
                </main>
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default PortalLayout;
