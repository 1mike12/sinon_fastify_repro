const assert = require('assert');
const server = require('./server');
const sinon = require('sinon');
describe('test', function () {
    it('handler works and passes fine', async function () {
        const response = await server.inject({
            method: 'POST',
            url: '/test',
            payload: {hello: 'world'}
        });
        assert.strictEqual(response.statusCode, 200);
    });

    describe("fake timer tests", function () {
        let clock;

        beforeEach(function () {
            clock = sinon.useFakeTimers();
        });

        afterEach(function () {
            clock.restore();
        })
        it("doesn't pass when sinon is included", async function () {
            const response = await server.inject({
                method: 'POST',
                url: '/test',
                payload: {hello: 'world'}
            });
            assert.strictEqual(response.statusCode, 200);
        });
    })
})
