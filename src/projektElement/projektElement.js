function ProjectElement({ id, name="projekt", onClick }) {
  const background1 = `/${id}/1.png`;
  const background2 = `/${id}/2.png`;

  return (
    <div id={id} className="col-12 col-lg-6 projekt" onClick={() => onClick(id)}>
      <p className="projekt-text">{name}</p>
      <div className="img-projekt">
        <div
          className="img-layer layer-1"
          style={{ backgroundImage: `url(${background1})` }}
        ></div>
        <div
          className="img-layer layer-2"
          style={{ backgroundImage: `url(${background2})` }}
        ></div>
      </div>
    </div>
  );
}


export default ProjectElement;
