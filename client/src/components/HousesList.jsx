import React from 'react';
import House from './House.jsx';
import { HousesListCss, HousingList, ShowMoreHomes } from './Styled_Components/styling.jsx';
import PropTypes from 'prop-types';

const HousesList = (props) => {

  return (
    <HousesListCss>
      <HousingList>
        {props.state.houses.map((house, index) =>
          <House
            house={house}
            key={index}
            state={props.state}
          />
        )}
      </HousingList>
      {props.state.moreRevealed
        ? <div>
          <HousingList>{props.state.houses.map((house, index) =>
            <House
              house={house}
              key={index}
              state={props.state}
            />)}
          </HousingList>
          <HousingList>{props.state.map((house, index) =>
            <House
              house={house}
              key={index}
              state={props.state}
            />)}
          </HousingList>
        </div>
        : <ShowMoreHomes onClick={props.toggleHomes}>Show more homes</ShowMoreHomes>
      }
    </HousesListCss>
  )
}

export default HousesList;

HousesList.propTypes = {
  state: PropTypes.array
}