const videos = [
  {
    id: 1,
    title: "let, const and var",
    duration: "5m",
  },
  {
    id: 2,
    title: "why we need Typescript",
    duration: "10min",
  },
  {
    id: 3,
    title: "all hooks in ReactJs",
    duration: "40min",
  },
];

export function DemoVersion() {
  return (
    <>
      <h1>Here is the Demo of the App</h1>
      <div>
        {videos.map((video) => {
          return (
            <div key={video.id}>
              <p>{video.title}</p>
              <p>{video.duration}</p>
              <button>Like</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
