const TokenKey = "Talent-Token";
const UserId = "User-Id";
const GetName = 'Get-Name'

export function getToken() {
  return sessionStorage.getItem(TokenKey) || "";
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token);
}

export function getId() {
  return sessionStorage.getItem(UserId) || "";
}

export function setId(userId) {
  return sessionStorage.setItem(UserId, userId);
}

export function getName() {
  return sessionStorage.getItem(GetName) || "";
}

export function setName(setName) {
  return sessionStorage.setItem(GetName, setName);
}


export function getUsername() {
  return sessionStorage.getItem("username") || "";
}

export function setUsername(name) {
  return sessionStorage.setItem("username", name);
}

export function setRole(role) {
  return sessionStorage.setItem("role", role);
}

export function getRole() {
  return sessionStorage.getItem("role") || "";
}

export function removeData() {
  return sessionStorage.clear();
}
