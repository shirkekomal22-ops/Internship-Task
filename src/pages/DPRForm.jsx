import { useState } from "react";

function DPRForm() {

  const [project, setProject] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [work, setWork] = useState("");
  const [workers, setWorkers] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      project,
      date,
      weather,
      work,
      workers,
      image
    };

    console.log("DPR Submitted:", data);

    alert("DPR Submitted Successfully!");
  };

  return (
    <div className="container">

  <div className="card">
    <div style={{ padding: "20px" }}>
      <h2>DPR Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Project Name:</label><br />
          <select value={project} onChange={(e) => setProject(e.target.value)}>
            <option value="">Select Project</option>
            <option>Bridge Construction</option>
            <option>Highway Expansion</option>
            <option>Metro Tunnel</option>
          </select>
        </div>

        <br />

        <div>
          <label>Date:</label><br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Weather:</label><br />
          <select value={weather} onChange={(e) => setWeather(e.target.value)}>
            <option value="">Select Weather</option>
            <option>Sunny</option>
            <option>Rainy</option>
            <option>Cloudy</option>
          </select>
        </div>

        <br />

        <div>
          <label>Work Description:</label><br />
          <textarea
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Number of Workers:</label><br />
          <input
            type="number"
            value={workers}
            onChange={(e) => setWorkers(e.target.value)}
          />
        </div>

        <br />

        <div>
  <label>Upload Image:</label><br />

  <input
    type="file"
    onChange={(e) => {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }}
  />

  {preview && (
    <div>
      <label>Image Preview:</label><br />
     <img src={preview} width="300" />
    </div>
  )}

</div>

        <br />

        <button type="submit">Submit DPR</button>

      </form>
    </div>
    </div>
    </div>
  );
}

export default DPRForm;