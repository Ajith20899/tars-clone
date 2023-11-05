import { User, Users, Wallet, UserCog, LogOut } from "lucide-react";

export const categories = [
  {
    content: "General info",
    key: "Groups",
    color: 'hsl(var(--primary))',
    icon: <User color="#ffffff" size={"16px"} />,
  },
  {
    content: "Groups",
    key: "groups",
    color: 'hsl(20.67deg 100% 64.71%)',
    icon: <Users color="#ffffff" size={"16px"} />,
  },
  {
    content: "Wallets",
    key: "wallets",
    color: "hsl(36deg 100% 64.71%)",
    icon: <Wallet color="#ffffff" size={"16px"} />,
  },
  {
    content: "Settings",
    key: "settings",
    color: "hsl(159.46deg 66.82% 56.27%)",
    icon: <UserCog color="#ffffff" size={"16px"} />,
  },
  {
    content: "Logout",
    key: "logout",
    color: "hsl(0deg 97.8% 64.31%)",
    icon: <LogOut color="#ffffff" size={"16px"} />,
  },
];
