import "./UsersInfoCard.styles.scss";

type Props = {
  icon: JSX.Element;
  color: string;
  title: string;
  number: string;
};

const UsersInfoCard: React.FC<Props> = ({ icon, color, title, number }) => {
  return (
    <div className="grid-card">
      <div
        className={`card-icon align-items-center justify-content-center d-flex ${color}`}
      >
        {icon}
      </div>

      <div className="card-text">{title}</div>
      <div className="card-text-bold">{number}</div>
    </div>
  );
};

export default UsersInfoCard;
