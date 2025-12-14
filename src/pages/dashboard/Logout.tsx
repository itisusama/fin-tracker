import SectionHeading from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/useUserStore";
import { Link, useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    const logout = useUserStore((state) => state.logout);
     
    const handleLogout = () => {
            logout();
            navigate("/");
        };

    return(
        <>
        <SectionHeading heading="LOG OUT"/>
        <div className="w-full flex flex-col gap-4 items-center mt-12 justify-center">
            <p>Are you sure you want to LOG OUT?</p>
            <div className="flex items-center gap-4">
                <Button variant="finance" type="button" onClick={handleLogout}>Yes</Button>
                <Link to="/income"><Button variant="finance" type="button">No</Button></Link>
            </div>
        </div>
        </>
    )
}