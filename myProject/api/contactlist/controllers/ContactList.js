'use strict';

/**
 * ContactList.js controller
 *
 * @description: A set of functions called "actions" for managing `ContactList`.
 */

module.exports = {

  /**
   * Retrieve contactList records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.contactList.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a contactList record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.contactList.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an contactList record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.contactList.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an contactList record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.contactList.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an contactList record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.contactList.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
