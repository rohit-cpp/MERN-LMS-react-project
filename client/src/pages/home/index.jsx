import Navbar from "@/components/navabar";
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-blue-200">
      <div className="text-center">
        <div className="text-4xl font-semibold p-10">Hello peoples.</div>
        <div className="text-6xl mt-20">Click Login to Start</div>
        <Button
          onClick={() => navigate("/auth")}
          variant="outline"
          className="bg-amber-500 mt-8 text-4xl cursor-pointer"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
