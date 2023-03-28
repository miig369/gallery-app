const UploadForm = () => {
  return (
    <>
      <p className='display-6 text-center mb-3'>Upload Stock Image</p>
      <div className='mb-5 d-flex align-items-center justify-content-center'>
        <form>
          <div class='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              name='title'
              placeholder='enter title'
            />
          </div>
          <div class='input-group'>
            <textarea
              className='form-control'
              aria-label='With textarea'
            ></textarea>
          </div>
          <div class='input-group mb-3'>
            <input type='file' class='form-control' id='inputGroupFile02' />
            <label className='input-group-text' for='inputGroupFile02'>
              Upload
            </label>
          </div>
          <button type='submit' className='btn btn-success float-end'>
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadForm;
