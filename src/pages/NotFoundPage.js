import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    alert("redirect to home");
  }, []);

  return <></>;
}

export default NotFoundPage;
