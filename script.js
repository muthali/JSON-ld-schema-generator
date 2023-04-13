function generateJSONLD() {
  const productName = document.getElementById("productName").value;
  const imageURL = document.getElementById("imageURL").value;
  const brandName = document.getElementById("brandName").value;
  const productDescription = document.getElementById("productDescription").value;
  const priceCurrency = document.getElementById("priceCurrency").value;
  const price = document.getElementById("price").value;
  const aggregateRating = document.getElementById("aggregateRating").value;
  const numberOfRatings = document.getElementById("numberOfRatings").value;
  const highestRatingValue = document.getElementById("highestRatingValue").value;
  const lowestRatingValue = document.getElementById("lowestRatingValue").value;

  const jsonLDData = `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "${productName}",
    "image": "${imageURL}",
    "description": "${productDescription}",
    "brand": {
      "@type": "Brand",
      "name": "${brandName}"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "${priceCurrency}",
      "price": "${price}",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "${aggregateRating}",
        "reviewCount": "${numberOfRatings}",
        "bestRating": "${highestRatingValue}",
        "worstRating": "${lowestRatingValue}"
      }
    }
  }`;

  document.getElementById("jsonlddata").innerHTML = JSON.stringify(
    JSON.parse(jsonLDData),
    null,
    2
  );

  document.getElementById("copyJSONLD").disabled = false;
}

function copyJSONLDToClipboard() {
  const jsonLDData = document.getElementById("jsonlddata").textContent;
  navigator.clipboard.writeText(jsonLDData);
}

function emailCodeToDeveloper() {
  const emailAddress = document.getElementById("emailAddress").value;
  const subject = "JSON LD Schema Code";
  const jsonLDData = document.getElementById("jsonlddata").textContent;
  const body = `Hi there,\n\nPlease find below the JSON LD schema code:\n\n${jsonLDData}\n\nBest regards,\nJSON LD Schema Generator`;

  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${encodeURIComponent(
    body
  )}`;
  window.location.href = mailtoLink;
}
