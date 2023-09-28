import React from "react";

// На сколько я знаю это нормальная практика мелкие вспомогательные компоненты
// создавать в том же фаиле, что бы не плодить кучу папок без нужды
const ReviewItem = ({ user, text, rating }) => {
  return (
    <div>
      <h4>
        {user} | rating: {rating}
      </h4>
      <div>{text}</div>
    </div>
  );
};

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(({ id, user, text, rating }) => (
        <ReviewItem key={id} user={user} text={text} rating={rating} />
      ))}
    </div>
  );
};
