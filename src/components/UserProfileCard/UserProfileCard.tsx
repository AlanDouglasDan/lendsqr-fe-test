import { UserInterface } from "types/user.types";
import { ProfileUserIcon, FullStarIcon, EmptyStarIcon } from "components/icons";
import "./UserProfileCard.styles.scss";

type Props = {
  data: UserInterface;
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

const UserProfileCard: React.FC<Props> = ({
  data,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="profile-card d-flex flex-column justify-content-between">
      <div className="d-flex align-items-center">
        <div className="profileImageContainer d-flex align-items-center justify-content-center">
          {data.profile.avatar ? (
            <img
              src={data.profile.avatar}
              alt="profile"
              className="img-fluid rounded-circle"
            />
          ) : (
            <ProfileUserIcon />
          )}
        </div>

        <div>
          <div className="profileName">
            {data.profile.firstName} {data.profile.lastName}
          </div>
          <div className="profileBvn">{data.userName}</div>
        </div>

        <div className="verticalLine" />

        <div>
          <div className="tierText">User's Tier</div>
          <div className="d-flex" style={{ gap: "6px" }}>
            <FullStarIcon />
            <EmptyStarIcon />
            <EmptyStarIcon />
          </div>
        </div>

        <div className="verticalLine" />

        <div>
          <div className="profileName">₦{data.accountBalance}</div>
          <div className="profileBvn" style={{ color: "#213F7D" }}>
            {data.accountNumber}/Providus Bank
          </div>
        </div>
      </div>

      <div className="tabNav d-flex align-items-center justify-content-between">
        <div
          className={`navMenu ${activeTab === 0 && "tabActive"}`}
          onClick={() => setActiveTab(0)}
        >
          General Details
        </div>
        <div
          className={`navMenu ${activeTab === 1 && "tabActive"}`}
          onClick={() => setActiveTab(1)}
        >
          Documents
        </div>
        <div
          className={`navMenu ${activeTab === 2 && "tabActive"}`}
          onClick={() => setActiveTab(2)}
        >
          Bank Details
        </div>
        <div
          className={`navMenu ${activeTab === 3 && "tabActive"}`}
          onClick={() => setActiveTab(3)}
        >
          Loans
        </div>
        <div
          className={`navMenu ${activeTab === 4 && "tabActive"}`}
          onClick={() => setActiveTab(4)}
        >
          Savings
        </div>
        <div
          className={`navMenu ${activeTab === 5 && "tabActive"}`}
          onClick={() => setActiveTab(5)}
        >
          App and System
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
