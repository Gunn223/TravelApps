/* eslint-disable react/prop-types */
const CardDashboard = (props) => {
  const { title, total, style, img } = props;
  console.log(total);
  return (
    <div
      className={`${style} overflow-hidden text-white border rounded border-2 shadow-sm position-relative`}
      style={{ width: '100%', height: '170px' }}>
      <img
        src={`${img}`}
        alt="cardbg"
        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.7' }}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center text-start align-items-center flex-column">
        <h5
          style={{ opacity: '1' }}
          className="text-start fw-bold fs-3">
          {title}
        </h5>
        <p
          style={{ opacity: '1' }}
          className="fw-semibold fs-3">
          {/* {total} */}12
        </p>
      </div>
    </div>
  );
};

export default CardDashboard;
