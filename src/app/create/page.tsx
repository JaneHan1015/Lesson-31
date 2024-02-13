"use client";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [timezone, setTimezone] = useState("");
  const [duration, setDuration] = useState("");
  const [preferredtime, setPreferredtime] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Button clicked");
    const dataToSend = {
      title: title,
      description: desc,
      timezone: timezone,
      meetingLength: duration,
      hostName: username,
      hostPassword: password,
      hostPreferredTime: preferredtime,
    };
    const res = await fetch("http://localhost:5000/createmeeting"), {
      method: "POST",
      headers: {
        accept: "*/*",
        "content-type": "application/json"
      }
      body: JSON.stringify(dataToSend)
    }}
    console resJson = await resizeBy.json();
    console.log(resJson)
  };

  const handleNameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePwChange = (e: any) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: any) => {
    setDesc(e.target.value);
  };

  const handleTimezone = (e: any) => {
    setTimezone(e.target.value);
  };

  const handleDuration = (e: any) => {
    setDuration(e.target.value);
  };

  const handlePreferredTime = (e: any) => {
    setPreferredtime(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Host name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="ex) gavin"
            value={username}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Host password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePwChange}
          />
        </div>
        <div>
          <label htmlFor="title">Meeting title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="ex) My meeting1"
            value={title}
            onChange={handleTitle}
          />
        </div>
        <div>
          <label htmlFor="description">Meeting description</label>
          <textarea
            id="description"
            name="description"
            placeholder="ex) This meeting is for only private users"
            value={desc}
            onChange={handleDescription}
          />
        </div>
        <div>
          <label htmlFor="timezone">Timezone</label>
          <input
            type="text"
            name="timezone"
            id="timezone"
            placeholder="ex) UTS"
            value={timezone}
            onChange={handleTimezone}
          />
        </div>
        <div>
          <label htmlFor="duration">Meeting duration</label>
          <input
            type="text"
            name="duration"
            id="duration"
            placeholder="ex) 30"
            value={duration}
            onChange={handleDuration}
          />
        </div>
        <div>
          <label htmlFor="preferredtime">Preferred time</label>
          <input
            type="text"
            name="preferredtime"
            id="preferredtime"
            placeholder="ex) 1,2,3,4,5"
            value={preferredtime}
            onChange={handlePreferredTime}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
