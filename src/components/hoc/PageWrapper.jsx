const PageWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <div id={idName} className='container-fluid'>
        <div className='row p-30-0'>
          <Component {...props} />
        </div>
      </div>
    );
  };
export default PageWrapper;
