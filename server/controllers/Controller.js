/**
 * Controller.js
 * Base controller ES6 class that can be inherited.
 * <iae2784@rit.edu>
 */

 // Referenced this link here to create a controller class.
 // [https://blog.cloudboost.io/node-express-controller-inheritance-2d5b2661ee7d]

/**
 * The Controller class where other controllers inherit or
 * override pre-defined and existing properties.
 */
class Controller {

 /**
  * @param {Model} model Default model object for controller.
  * Required to create an instance of the controller.
  * @param {*} options Options associated with a particular controller instance.
  */
  constructor(model, options) {
    this._model = model;
    this.options = options || {};
    // this.create = this.create.bind(this);
  }

  /**
   * Create instance of base model object with request body information.
   * @param {Request} req The request object.
   * @param {Response} res The response object.
   * @param {function} next The callback to the next controller handler, if any.
   */
  // create(req, res, next) {
  //  let obj = req.body;
  // }
}

// ES6 export default.
// export default Controller;

// Node.js module.exports:
module.exports = {
  Controller,
};
