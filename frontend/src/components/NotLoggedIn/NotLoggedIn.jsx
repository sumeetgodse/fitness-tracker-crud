export const NotLoggedIn = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "10%" }}>
      <img
        style={{ height: "150px", width: "150px", margin: "1% auto" }}
        src={"../../../public/fitness.png"}
      />
      <h3 style={{ margin: "1% auto" }}>
        Please login or register to continue!
      </h3>
    </div>
  );
};
