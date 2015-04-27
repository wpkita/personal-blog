module.exports = function(grunt) {
    grunt.initConfig({
        aws: grunt.file.readJSON('.aws.json'),
        s3: {
            options: {
                bucket: '<%= aws.bucket %>',
                region: '<%= aws.region %>',
                accessKeyId: '<%= aws.accessKeyId %>',
                secretAccessKey: '<%= aws.secretAccessKey %>',
                cache: false
            },
            build: {
                cwd: 'public/',
                src: '**',
                dest: 'blog/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-aws');
};
