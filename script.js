let jokesPara = document.getElementById("jokes");

document.getElementById("jokes_button").addEventListener("click", jokesFeach);

async function jokesFeach(limit = 1) {
  const apiKey = "2IPCRFnmZV3LMyO/Cv+dyg==HAi5sIHjobCK2d7o";
  try {
    const url = `https://api.api-ninjas.com/v1/dadjokes?limit=${limit}`;

    let jokesAPI = await fetch(url, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    let jokesData = await jokesAPI.json();

    jokesData.forEach((jokeObj) => {
      jokesPara.innerText=jokeObj.joke;// Log each joke
    });

    // console.log(jokesData);
  } catch (err) {
    console.log(err);
  }
}
