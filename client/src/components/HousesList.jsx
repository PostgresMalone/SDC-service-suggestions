import React from 'react';
import House from './House.jsx';
import { HousesListCss, HousingList, ShowMoreHomes } from './Styled_Components/styling.jsx';

const HousesList = (props) => (
  <HousesListCss>
    <HousingList>
      {props.state.houses[0].suggestions.slice(0, 4).map((house, index) =>
        <House
          house={house}
          key={index}
          state={props.state}
          addFavoriteList={props.addFavoriteList}
          addToFavorited={props.addToFavorited}
          removeFromFavorited={props.removeFromFavorited}
        />
      )}
    </HousingList>
    {props.state.moreRevealed
      ? <div>
        <HousingList>{props.state.houses[0].suggestions.slice(4, 8).map((house, index) =>
          <House
            house={house}
            key={index}
            state={props.state}
            addFavoriteList={props.addFavoriteList}
            addToFavorited={props.addToFavorited}
            removeFromFavorited={props.removeFromFavorited}
          />)}
        </HousingList>
        <HousingList>{props.state.houses[0].suggestions.slice(8, 12).map((house, index) =>
          <House
            house={house}
            key={index}
            state={props.state}
            addFavoriteList={props.addFavoriteList}
            addToFavorited={props.addToFavorited}
            removeFromFavorited={props.removeFromFavorited}
          />)}
        </HousingList>
      </div>
      : <ShowMoreHomes onClick={props.toggleHomes}>Show more homes</ShowMoreHomes>
    }
  </HousesListCss>
);

export default HousesList;