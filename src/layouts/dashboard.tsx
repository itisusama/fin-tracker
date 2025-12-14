import { Button } from "@/components/ui/button";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
    const navigate = useNavigate();
    const buttonText = [
    {"text": "INCOME", "link": "/income"},
    {"text": "EXPENSES", "link": "/expense"},
    {"text": "REPORTS", "link": "/report"},
    {"text": "EMAIL", "link": "/email"},
    {"text": "LOGOUT", "link": "/logout"},
  ]

  return (
  <>
  <div className="flex justify-center items-center">
        <Link to="/"><img src="/logo-text.png" alt="header" className="h-40"/></Link>
        </div>
        <section className="flex justify-center my-4">
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 gap-3">
        <div className="px-5 py-2">
          {
            buttonText.map((btn, index) => (
              <div key={index}>
                <Button variant="finance" className="w-75 my-2" onClick={() => navigate(btn.link)}>{btn.text}</Button>
              </div>
            ))
          }
        </div>
        <div className="col-span-2 bg-[#f8d454] px-5 py-2">
          <Outlet />
        </div>
       </div>
      </section>
  </>
  );
}