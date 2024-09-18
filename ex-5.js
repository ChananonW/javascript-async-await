// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here

const fetchAndHandleJohnProfile = async () => {
  try {
    const profile = await getJohnProfile(); // This will throw an error
  } catch (error) {
    console.log(error);
  }
};

fetchAndHandleJohnProfile();