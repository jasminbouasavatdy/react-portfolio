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
    <div className="text-center py-4"style={styles.card}>
      <h1 style={styles.heading}>Contact Page</h1>
      <form className="container-fluid">
        <div  className="form-group container ">
          <label for="text1" className="col-4 col-form-label"></label>
          <div className="col-12">
            <input id="text1" name="text1" placeholder='Name' className="form-control" required="required" />
          </div>
        </div>
        <div className="form-group container ">
          <label className="col-4 col-form-label" for="text2"></label>
          <div className="col-12">
            <input id="text2" name="text2" placeholder='Email' className="form-control" required="required" />
          </div>
        </div>
        <div className="form-group container ">
          <label for="textarea" className="col-4 col-form-label"></label>
          <div className="col-12">
            <textarea id="textarea" name="textarea" cols="40" rows="5" className="form-control" required="required" placeholder='Message' ></textarea>
          </div>
        </div>
        <div className="form-group container ">
          <div className="col-12 col-form-label text-right">
            <button name="submit" type="submit" className=" btn-block btn btn-warning">Submit</button>
          </div>
        </div>
      </form>

    </div>
  );
}
