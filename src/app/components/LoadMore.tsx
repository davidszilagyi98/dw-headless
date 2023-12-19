export function LoadMore({ onLoadMore }: { onLoadMore: () => void }) {
  return (
    <div className="my-4">
      <button
        type="button"
        className="btn article-button mx-5 d-flex mx-auto border border-black"
        onClick={onLoadMore}>
        Load more +
      </button>
    </div>
  );
}
