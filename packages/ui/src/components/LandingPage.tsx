import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="mt-40 text-white relative z-10 flex">
      <div className="w-2/3 p-4">
        <div className="flex flex-col space-y-10">
          <div className="text-5xl italic">
            <h1>Automatic Question Paper Generator</h1>
          </div>
          <div className="text-xl italic space-y-4">
            <p>This project is a sophisticated and practical solution designed to streamline and simplify</p>
            <p>the process of creating customized question papers for educational institutions.</p>
            <p>This project aims to provide a user-friendly platform for generating diverse</p>
            <p>and tailored sets of questions efficiently.</p>
          </div>
        </div>
      </div>

      <div className="w-1/3 bg-gray-700 p-4 rounded-xl mr-10">
        <h2 className="text-2xl text-white font-bold mb-4 italic">Info</h2>
        <form className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-4">
            <p>Do you want to post Question?</p>
            <Link to="/post">
              <button className="bg-white border2 border rounded-lg w-20 h-10 text-black">
                POST
              </button>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <p>Do you want to Get Question Paper?</p>
            <Link to="/get">
              <button className="bg-white border2 border rounded-lg w-20 h-10 text-black">
                GET
              </button>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <p>Do you have any Queries?</p>
            <Link to="/query">
              <button className="bg-white border2 border rounded-lg w-20 h-10 text-black">
                Query
              </button>
            </Link>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}
