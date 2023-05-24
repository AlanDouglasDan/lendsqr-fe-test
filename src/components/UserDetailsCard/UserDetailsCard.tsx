import { UserInterface } from "types/user.types";
import "./UserDetailsCard.styles.scss";

type Props = {
  data: UserInterface;
};

const UserDetailsCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="information-card">
      <div className="header16 dark-blue">Personal Information</div>

      <div className="grid-5 mt-30px">
        <div>
          <div className="text-uppercase dim-grey">full Name</div>
          <div className="header16 dim-grey mt-1">
            {data.profile.firstName} {data.profile.lastName}
          </div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Phone Number</div>
          <div className="header16 dim-grey mt-1">
            {data.profile.phoneNumber}
          </div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Email Address</div>
          <div className="header16 dim-grey mt-1">{data.email}</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Bvn</div>
          <div className="header16 dim-grey mt-1">{data.profile.bvn}</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Gender</div>
          <div className="header16 dim-grey mt-1">{data.profile.gender}</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey mt-30px">Marital status</div>
          <div className="header16 dim-grey mt-1">Single</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey mt-30px">Children</div>
          <div className="header16 dim-grey mt-1">None</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey mt-30px">
            Type of residence
          </div>
          <div className="header16 dim-grey mt-1">Parent’s Apartment</div>
        </div>
      </div>

      <hr className="horizontal-line" />

      <div className="header16 dark-blue">Education and Employment</div>

      <div className="grid-4 m-0 mt-30px" style={{ gridGap: "30px" }}>
        <div>
          <div className="text-uppercase dim-grey">level of education</div>
          <div className="header16 dim-grey mt-1">{data.education.level}</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">employment status</div>
          <div className="header16 dim-grey mt-1">
            {data.education.employmentStatus}
          </div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">sector of employment</div>
          <div className="header16 dim-grey mt-1">{data.education.sector}</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Duration of employment</div>
          <div className="header16 dim-grey mt-1">
            {data.education.duration}
          </div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">office email</div>
          <div className="header16 dim-grey mt-1">
            {data.education.officeEmail}
          </div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Monthly income</div>
          <div className="header16 dim-grey mt-1">
            ₦{data.education.monthlyIncome[0]} - ₦
            {data.education.monthlyIncome[1]}
          </div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">loan repayment</div>
          <div className="header16 dim-grey mt-1">
            {data.education.loanRepayment}
          </div>
        </div>
      </div>

      <hr className="horizontal-line" />

      <div className="header16 dark-blue">Socials</div>

      <div className="grid-5 mt-30px">
        <div>
          <div className="text-uppercase dim-grey">Twitter</div>
          <div className="header16 dim-grey mt-1">{data.socials.twitter}</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Facebook</div>
          <div className="header16 dim-grey mt-1">{data.socials.facebook}</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Instagram</div>
          <div className="header16 dim-grey mt-1">{data.socials.instagram}</div>
        </div>
      </div>

      <hr className="horizontal-line" />

      <div className="header16 dark-blue">Guarantor</div>

      <div className="grid-5 mt-30px">
        <div>
          <div className="text-uppercase dim-grey">full Name</div>
          <div className="header16 dim-grey mt-1">
            {data.guarantor.firstName} {data.guarantor.lastName}
          </div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Phone Number</div>
          <div className="header16 dim-grey mt-1">
            {data.guarantor.phoneNumber}
          </div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Email Address</div>
          <div className="header16 dim-grey mt-1">grace@gmail.com</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Relationship</div>
          <div className="header16 dim-grey mt-1">Sister</div>
        </div>
      </div>

      <hr className="horizontal-line" />

      <div className="header16 dark-blue opacity-0">Guarantor</div>

      <div className="grid-5 mt-30px">
        <div>
          <div className="text-uppercase dim-grey">full Name</div>
          <div className="header16 dim-grey mt-1">
            {data.guarantor.firstName} {data.guarantor.lastName}
          </div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Phone Number</div>
          <div className="header16 dim-grey mt-1">
            {data.guarantor.phoneNumber}
          </div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Email Address</div>
          <div className="header16 dim-grey mt-1">grace@gmail.com</div>
        </div>

        <div>
          <div className="text-uppercase dim-grey">Relationship</div>
          <div className="header16 dim-grey mt-1">Sister</div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
