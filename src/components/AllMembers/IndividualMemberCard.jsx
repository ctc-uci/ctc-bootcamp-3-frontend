
import PropTypes from "prop-types";

const IndividualMemberCard = ( {memberLink, name, team} ) => {

    return (
        <div className="Member">
            <h2>{name}</h2>
            <h3>{team}</h3>
            <h3>
                <a href={memberLink}> View Member</a>
            </h3>
        </div>
    )
}

IndividualMemberCard.propTypes = {
    name: PropTypes.string,
    team: PropTypes.string,
    memberLink: PropTypes.string
}

export default IndividualMemberCard;
