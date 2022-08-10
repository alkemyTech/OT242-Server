const express = require("express");
var router = express.Router();

const membersController = require('../../controllers/membersController');
const { membersValidationRules, validate } = require('../../middlewares/validator');

/**
 * @swagger
 * components:
 *  schemas:
 *    Member:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: the id of member
 *        name:
 *          type: string
 *          description: the name of the member
 *        image:
 *          type: string
 *          description: the image of the member
 *      example:
 *        id: 1
 *        name: Member 1
 *        image: https://example.com/img
 *    MemberNotFound:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: A message for the not found member
 *        status:
 *          type: int
 *          description: status for the not found member
 *      example:
 *        msg: Member was not found
 *
 *  parameters:
 *    memberId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *      description: the member id
 */

/**
 * @swagger
 * tags:
 *  name: Member
 *  description: Member endpoint
 */


/**
 * @swagger
 * /members/:
 *  post:
 *    summary: create a new member
 *    tags: [Members]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Member'
 *    responses:
 *      200:
 *        description: the member was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Member'
 *      500:
 *        description: server error
 *
 */


router.post('/', membersValidationRules(), validate, membersController.createMember);
/**
 * @swagger
 * /members/{id}:
 *  put:
 *    summary: Update a member by id
 *    tags: [Members]
 *    parameters:
 *      - $ref: '#/components/parameters/memberId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Member'
 *    responses:
 *      200:
 *        description: The updated Member 
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Member'
 *      404:
 *        description: the Member was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MemberNotFound'
 *
 */
router.put('/:id', membersController.updateMember)


/* Eliminacion de miembros */
//router.delete('/:id', /* deleteMember */);


module.exports = router; 
