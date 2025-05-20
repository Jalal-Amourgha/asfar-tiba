const Title = ({ title, desc }) => {
  return (
    <div className="text-center text-text">
      <h1 className="text-5xl font-bold text-center text-text mb-5">{title}</h1>
      <div className="text-lg">{desc}</div>
    </div>
  );
};

export default Title;
