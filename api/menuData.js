import client from '../utils/client';

const endpoint = client.databaseURL;

const getMenuItem = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menuItems.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menuItems/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateMenuItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menuItems/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menuItems/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createMenuItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menuItems.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getMenuItem, getSingleMenuItem, deleteMenuItem, updateMenuItem, createMenuItem
};
