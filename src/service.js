const User = require("./User");

class UserService {
  create(user) {
    return User.create(user);
  }

  getAll(filters = {}) {
    return User.find(filters);
  }

  getById(id) {
    return User.findById(id);
  }

  delete(id) {
    return User.deleteOne({_id: id});
  }

  update(id, newData) {
    return User.updateOne({_id: id}, newData);
  }
}

module.exports = new UserService();