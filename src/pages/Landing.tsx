import MainHeading from "@/components/reusable/main-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <MainHeading title="Fin Tracker - Your Personal Finance Manager" data-aos="fade-down"/>
            <p className="text-center my-4" data-aos="fade-up">
               Hi! There. Do you have issues in managing you personal finance? 
               <br /> 
               No worries now. With <b>Fin Tracker</b>, you can manage your finance easily and effectively. 
            </p>

            <Link to="/income">
                <Button variant="finance" data-aos="fade-down">Go to Dashboard<ArrowRight/></Button>
            </Link>
        </div>
    )
}