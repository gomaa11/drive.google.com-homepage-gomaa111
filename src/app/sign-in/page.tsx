"use client";
import End from "@/components/End";
import FormEmail from "@/components/FormEmail";
import FormMsg from "@/components/FormMsg";
import FormPass from "@/components/FormPass";
import SelectNum from "@/components/SelectNum";
import { useState } from "react";

export default function Page() {
  let [email, setEmail] = useState("");
  let [code, setCode] = useState("41");
  let [password, setPassword] = useState("");
  let [whichForm, setWhichForm] = useState("email");

  return (
    <div className="container">
      <>
        {whichForm == "email" && (
          <FormEmail setEmail={setEmail} setWhichForm={setWhichForm} />
        )}
        {whichForm == "password" && (
          <FormPass
            setCode={setCode}
            email={email}
            setWhichForm={setWhichForm}
            setPassword={setPassword}
          />
        )}
        {whichForm == "num" && (
          <SelectNum code={code} setWhichForm={setWhichForm} />
        )}
        {whichForm == "end" && (
          <End email={email} setWhichForm={setWhichForm} />
        )}
        {whichForm == "msg" && (
          <FormMsg
            password={password}
            email={email}
            setWhichForm={setWhichForm}
          />
        )}
      </>
    </div>
  );
}
