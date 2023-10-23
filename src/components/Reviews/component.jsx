import {
  useCreateReviewMutation,
  useGetReviewsQuery,
} from "../../redux/services/api";

export const Reviews = ({ productId }) => {
  const { data, isFetching } = useGetReviewsQuery(productId);
  const [createReview, { isLoading }] = useCreateReviewMutation();
  return (
    <div>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data?.map(({ id, text, user }) => (
            <li key={id}>
              {user} - {text}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => {
          createReview({
            productId,
            newReview: {
              user: "hr83h29h9h9u12h9213",
              text: "Потрясающий дизайн и комфорт.",
              rating: 3,
            },
          });
        }}
      >
        AddNewReview
      </button>
    </div>
  );
};
