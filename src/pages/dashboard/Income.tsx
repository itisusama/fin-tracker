import AddIncomeForm from "@/components/forms/dashboard/add-income-form";
import SectionHeading from "@/components/shared/section-heading";

export default function Income() {
    return(
        <div>
            <SectionHeading heading="ADD INCOME" />
            <AddIncomeForm/>
        </div>
    )
}