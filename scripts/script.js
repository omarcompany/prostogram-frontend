const editProfileButton = document.querySelector(".edit-profile-button");
const editCloseButton = document.querySelector(".edit-close-button");
const editWrapper = document.querySelector(".edit-wrapper");
const editForm = document.querySelector(".edit-form");

const profileInfoName = document.querySelector(".profile-info-name");
const editFormName = document.querySelector(".edit-form-name");

const profileInfoDescription = document.querySelector(
  ".profile-info-description"
);
const editFormDescription = document.querySelector(".edit-form-description");

editProfileButton.onclick = () => {
  editFormName.value = profileInfoName.textContent;
  editFormDescription.value = profileInfoDescription.textContent;

  editWrapper.style.display = "block";
};

editCloseButton.onclick = () => {
  editWrapper.style.display = "none";
};

editForm.onsubmit = (event) => {
  event.preventDefault();

  const nameValue = editFormName.value.trim();
  if (nameValue) profileInfoName.textContent = nameValue;

  const descriptionValue = editFormDescription.value.trim();
  if (descriptionValue) profileInfoDescription.textContent = descriptionValue;

  editWrapper.style.display = "none";
};
