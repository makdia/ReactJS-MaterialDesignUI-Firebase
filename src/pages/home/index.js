import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

const Home = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate("/");
    }, [user]);
    return (  
      <div className="site-layout-content">
        <h3>Welcome!!!</h3>
        <h4>We are The Iconic Team</h4>
        <p>
            Start Building Client Websites With a Platform That Supports Your Business Growth. The Website Building Platform Chosen by 18,000 Agencies to Deliver Rapid Growth. Reduce Production Time. Access To Source Code. Automate Your Workflow. White Label Editor.
        </p>
        <p>
            Start Building Client Websites With a Platform That Supports Your Business Growth. The Website Building Platform Chosen by 18,000 Agencies to Deliver Rapid Growth. Reduce Production Time. Access To Source Code. Automate Your Workflow. White Label Editor.
        </p>
        <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
        </p>                                  
      </div>
    )
}

export default Home