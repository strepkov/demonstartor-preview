/*global describe it before */

"use client";

require(["lib/architect/architect", "lib/chai/chai", "/vfs-root"], 
  function (architect, chai, baseProc) {
    var expect = chai.expect;
    
    expect.setupArchitectTest([
        {
            packagePath: "plugins/c9.core/c9",
            startdate: new Date(),
            debug: true,
            hosted: true,
            davPrefix: "/",
            local: false,
            projectName: "Test Project"
        },
        "plugins/c9.core/ext",
        "plugins/c9.core/http-xhr",
        "plugins/c9.core/util",
        "plugins/c9.core/settings",
        {
            packagePath: "plugins/c9.ide.ui/ui",
            staticPrefix: "plugins/c9.ide.ui"
        },
        "plugins/c9.ide.ui/lib_apf",
        {
            packagePath: "plugins/c9.fs/fs",
            baseProc: baseProc
        },
        "plugins/c9.vfs.client/vfs_client",
        "plugins/c9.vfs.client/endpoint",
        "plugins/c9.ide.auth/auth",
        "plugins/c9.ide.run.debug/callstack",
        
        //Mock Plugins
        {
            consumes: ["apf", "ui", "Plugin"],
            provides: [
                "commands", "panels", "tabManager", "layout", "watcher",
                "dialog.error"
            ],
            setup: expect.html.mocked
        },
        {
            consumes: ["callstack"],
            provides: [],
            setup: main
        }
    ], architect);
    
    function main(options, imports, register) {
        var callstack = imports.callstack;
        callstack.show();
        var datagrid = callstack.getElement("datagrid");
        
        function countEvents(count, expected, done) {
            if (count == expected) 
                done();
            else
                throw new Error("Wrong Event Count: "
                    + count + " of " + expected);
        }
        
        describe('breakpoints', function() {
            before(function(done) {
                apf.config.setProperty("allow-select", false);
                apf.config.setProperty("allow-blur", false);
                
                bar.$ext.style.background = "rgba(220, 220, 220, 0.93)";
                bar.$ext.style.position = "fixed";
                bar.$ext.style.top = "75px";
                bar.$ext.style.right = "20px";
                bar.$ext.style.left = "";
                bar.$ext.style.bottom = "20px";
                bar.$ext.style.width = "300px";
                bar.$ext.style.height = "";
                
                done();
            });

            it('should add a frame', function(done) {
                breakpoints.addFrame({
                    
                });
                
                expect.html(datagrid, "Missing caption").text("/file.txt");
                expect.html(datagrid, "Missing content").text("This is the content");
                expect.html(datagrid.getFirstTraverseNode(), "Checked").className("checked");
                
                done();
            });
            
           describe("unload()", function() {
               it('should destroy all ui elements when it is unloaded', function(done) {
                   callstack.unload();
                   expect(datagrid.$amlDestroyed).to.equal(true);
                   done();
               });
           });
        });
        
        onload && onload();
    }
});