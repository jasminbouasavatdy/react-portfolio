import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};
export default function Contact() {
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>Contact Page</h1>
<form class="container-fluid">
  <div class="form-group ">
    <label for="text1" class="col-4 col-form-label">Name</label> 
    <div class="col-8">
      <input id="text1" name="text1" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group ">
    <label class="col-4 col-form-label" for="text2">Email </label> 
    <div class="col-8">
      <input id="text2" name="text2" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group ">
    <label for="textarea" class="col-4 col-form-label">Message</label> 
    <div class="col-8">
      <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control"></textarea>
    </div>
  </div> 
  <div class="form-group ">
    <div class="col-4 col-form-label">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
    </div>
  );
}
