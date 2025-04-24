import { useState } from 'react';

const AddPostForm = ({ onAddPost ,title,setTitle,content,setContent}) => {
  

  return (
    <form onSubmit={onAddPost} style={{ marginBottom: '20px' }}>
      <h2 style={{textAlign:"center"}}>Dodaj nowy post</h2>
      <div style={{display:"flex",justifyContent:"center"}}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '10px',textAlign:"center",height:"40px",fontSize:"30px",width:"50%" }}
        required
      />
      </div>
      <textarea
        placeholder="Text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: 'block', marginBottom: '1F0px', width: '100%' ,height:"50px"}}
        required
      />
      <div style={{ display: "flex", justifyContent: "center" ,marginTop:"20px"}}>
        <button type="submit" style={{width:"100%"}}>Add</button>
      </div>
    </form>
  );
};

export default AddPostForm;