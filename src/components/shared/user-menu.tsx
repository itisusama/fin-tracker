import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useUserStore } from "@/store/useUserStore";

export default function UserMenu() {
  const user = useUserStore((state) => state.user);

  const initials = user
    ? user.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="flex items-center gap-3 absolute top-4 right-4">
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="cursor-pointer">
          <AvatarFallback className="bg-primary text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-fit">
        <DropdownMenuLabel className="font-medium">
          {user?.fullName || "User"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="font-medium">
          {user?.email}
        </DropdownMenuLabel>
     </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
}