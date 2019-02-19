const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

/**
 * Checks if the source is a directory
 * @param {string}: source - file/folder to check
 * @return {boolean} True if directory, else false
 */
const isDirectory = source => lstatSync(source).isDirectory()

/**
 * Return the directories in .../'source'
 * @param {string}: source - folder to check
 * @return {array} The directories in .../'source'
 */
const directories = source =>
  readdirSync(source) // Read this directory
    .map(name => join(source, name)) // For all contents, create path 'source/name'
    .filter(isDirectory) // Check that content is a directory

// /**
//  * Return true if file is of type .md in source
//  * @param {string}: source - file to check
//  * @return {boolean} True if of type .md, else false
//  */
// const isMarkdown = file => file.match(/.*\.(md)/gi)

/**
 * Returns the slug for the employee
 * @param {string}: post - name of directory
 * @return {string} slug path
 */
const getSlugs = name => '/files/employee-bios/${' + name + '}'

module.exports = { directories, getSlugs }
