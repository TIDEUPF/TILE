/**
 * Created by Laia on 05/12/2017.
 */



function saveData(ldshake) {

    var allData= {
            students: $('#students').val(),
            subject: $('#subject').val(),
            info: $('#info').val(),
            problem: $('#problem').val(),
            questions:$('#questions').val(),
            intervention:$('#intervention').val(),
            tools_intervention_checklist:{
                pyramidapp: $('#pyramidapp').prop("checked"),
                ldfeedback: $('#ldfeedback').prop("checked") ,
                googleform: $('#googleforms').prop("checked") ,
                kahoot: $('#kahoot').prop("checked"),
                edpuzzle: $('#edpuzzle').prop("checked"),
                padlet: $('#padlet').prop("checked"),
                socrative: $('#socrative').prop("checked"),
                other: $('#other_tools').val()
            },
            evaluation:$('#evaluation').val(),
            tools_evaluation_checklist:{
                pyramidapp: $('#pyramidapp_analytics').prop("checked"),
                ldfeedback: $('#ldfeedback_analytics').prop("checked") ,
                googleform: $('#googleforms_analytics').prop("checked") ,
                kahoot: $('#kahoot_analytics').prop("checked"),
                edpuzzle: $('#edpuzzle_analytics').prop("checked"),
                padlet: $('#padlet_analytics').prop("checked"),
                socrative: $('#socrative_analytics').prop("checked"),
                other: $('#other_tools_analytics').val()
            },
            pyramidapp_analytics:$('#pyramidapp_analytics_text').val(),
            ldfeedback_analytics:$('#ldfeedback_analytics_text').val(),
            googleform_analytics:$('#googleforms_analytics_text').val(),
            other_analytics:$('#other_analysis_text').val(),
            reflection:$('#reflection').val(),
            changes:$('#changes').val(),
            changes_checklist:{
                controltime: $('#change_time').prop("checked"),
                participation: $('#change_participation').prop("checked"),
                instructions: $('#change_instructions').prop("checked"),
                otherchange1: $('#change1').val(),
                otherchange2: $('#change2').val(),
                otherchange3: $('#change3').val()
            }/*,
        documents: {
            "File1" : null,
            "File2" : null,
            "File3" : null
        }*/

    };

    var fileName;
    if(allData.designTitle==""){
        fileName= "Untitled design.json"
    }else{
        fileName= allData.designTitle + ".json";
    }

    var fileSaveStatus = {
        "File1": 1,
        "File2": 1,
        "File3": 1
    }

    var result = {
        "File1" : null,
        "File2" : null,
        "File3" : null
    };

    (function() {
        var fileReader1 = new FileReader();
        var fileReader2 = new FileReader();
        var fileReader3 = new FileReader();

        var file1 = document.querySelector('#File1');
        if(file1.files.length) {
            fileReader1.onload=function() {
                result["File1"] = {
                    "data" : fileReader1.result,
                    "filename" : file1.files[0].name,
                    "size" : file1.files[0].size
                };
                fileSaveStatus["File1"] = 1;
            };
            fileSaveStatus["File1"] = 0;
            fileReader1.readAsDataURL(file1.files[0]);
        }

        var file2 = document.querySelector('#File2');
        if(file2.files.length) {
            fileReader2.onload=function() {
                result["File2"] = {
                    "data" : fileReader2.result,
                    "filename" : file2.files[0].name,
                    "size" : file2.files[0].size
                };
                fileSaveStatus["File2"] = 1;
            };
            fileSaveStatus["File2"] = 0;
            fileReader2.readAsDataURL(file2.files[0]);
        }

        var file3 = document.querySelector('#File3');
        if(file3.files.length) {
            fileReader3.onload=function() {
                result["File3"] = {
                    "data" : fileReader3.result,
                    "filename" : file3.files[0].name,
                    "size" : file3.files[0].size
                };
                fileSaveStatus["File3"] = 1;
            };
            fileSaveStatus["File3"] = 0;
            fileReader3.readAsDataURL(file3.files[0]);
        }

        return result;
    })();

    var saveFileInterval = setInterval(function() {
        if(fileSaveStatus["File1"] && fileSaveStatus["File2"] && fileSaveStatus["File3"]) {
            clearInterval(saveFileInterval);
            allData["documents"] = result;

            if(ldshake) {
                ldshake_async_save(allData);
                return;
            }

            var blob = new Blob([JSON.stringify(allData)],{type: "text/json;charset=utf-8"});
            window.saveAs(blob, fileName);
        }
    }, 300);
}

function handleFiles(file) {

    if (!file) {
        //fileContent.innerHTML = "<p>No file selected!</p>";
        fileContent=[];
    } else {
        var fileReader= new FileReader();
        fileReader.onload=function() {
            //fileContent.innerHTML = '<pre>' + fileReader.result + '</pre>';
            fileContent=fileReader.result;
            data=JSON.parse(fileContent);

            $('#students').val(data.students);
            $('#subject').val(data.subject);
            $('#info').val(data.info);
            $('#problem').val(data.problem);
            $('#questions').val(data.questions);
            $('#intervention').val(data.intervention);
            //intervention_checklist
                $('#pyramidapp').prop("checked", data.tools_intervention_checklist.pyramidapp);
                $('#ldfeedback').prop("checked", data.tools_intervention_checklist.ldfeedback);
                $('#googleforms').prop("checked", data.tools_intervention_checklist.googleform);
                $('#kahoot').prop("checked", data.tools_intervention_checklist.kahoot);
                $('#edpuzzle').prop("checked", data.tools_intervention_checklist.edpuzzle);
                $('#padlet').prop("checked", data.tools_intervention_checklist.padlet);
                $('#socrative').prop("checked", data.tools_intervention_checklist.socrative);
                $('#other_tools').val(data.tools_intervention_checklist.other);
            $('#evaluation').val(data.evaluation);
            //evaluation_checklist
                $('#pyramidapp_analytics').prop("checked", data.tools_evaluation_checklist.pyramidapp);
                $('#ldfeedback_analytics').prop("checked", data.tools_evaluation_checklist.ldfeedback);
                $('#googleforms_analytics').prop("checked", data.tools_evaluation_checklist.googleform);
                $('#kahoot_analytics').prop("checked", data.tools_evaluation_checklist.kahoot);
                $('#edpuzzle_analytics').prop("checked", data.tools_evaluation_checklist.edpuzzle);
                $('#padlet_analytics').prop("checked", data.tools_evaluation_checklist.padlet);
                $('#socrative_analytics').prop("checked", data.tools_evaluation_checklist.socrative);
                $('#other_tools_analytics').val(data.tools_evaluation_checklist.other);
            $('#pyramidapp_analytics_text').val(data.pyramidapp_analytics);
            $('#ldfeedback_analytics_text').val(data.ldfeedback_analytics);
            $('#googleforms_analytics_text').val(data.googleform_analytics);
            $('#other_analysis_text').val(data.other_analytics);

            $('#reflection').val(data.reflection);
            $('#changes').val(data.changes);
            //changes_checklist
                $('#change_time').prop("checked", data.changes_checklist.controltime);
                $('#change_participation').prop("checked", data.changes_checklist.participation);
                $('#change_instructions').prop("checked", data.changes_checklist.instructions);
                $('#change1').val(data.changes_checklist.otherchange1);
                $('#change2').val(data.changes_checklist.otherchange2);
                $('#change3').val(data.changes_checklist.otherchange3);

            // pujada de documents

            if(data.documents.File1) {
                $('#file1-info .filename').text(data.documents.File1.filename)
                    .on('click', function() {
                        fetch(data.documents.File1.data).then(function(response) {
                            return response.blob();
                        }).then(function(myBlob) {
                            saveAs(myBlob, data.documents.File1.filename);
                        });
                    });
            }
        };
        fileReader.readAsText(file[0]);
    }
}

// set #lds_editor_iframe[presave=true] in the ILDE iframe
window.addEventListener('message', function (event) {
    function ldshakeSendSaveReadyMessage(data) {
        if(!ldshake_event_save_data) return;

        top.postMessage({type: 'ldshake_restapi_presave_ready'}, data.params.ldshake_origin);
        ldshake_event_save_data = null;
        console.log("pyramid: save_ready");
    }

    function ldshakeSendSaveErrorMessage(data, error_message) {
        if(!ldshake_event_save_data) return;

        top.postMessage({type: 'ldshake_restapi_presave_error', params: {error_message: error_message}}, data.params.ldshake_origin);
        ldshake_event_save_data = null;
        console.log("pyramid: save_error");
    }

    console.log("message received");
    console.log(event);
    if (event.data.type == 'ldshake_presave') {
        saveData(true);
    }
}, false);

function ldshake_async_save(data) {
    function ldshakeSendSaveReadyMessage(data) {
        if(!ldshake_event_save_data) return;

        top.postMessage({type: 'ldshake_restapi_presave_ready'}, data.params.ldshake_origin);
        ldshake_event_save_data = null;
        console.log("pyramid: save_ready");
    }

    function ldshakeSendSaveErrorMessage(data, error_message) {
        if(!ldshake_event_save_data) return;

        top.postMessage({type: 'ldshake_restapi_presave_error', params: {error_message: error_message}}, data.params.ldshake_origin);
        ldshake_event_save_data = null;
        console.log("pyramid: save_error");
    }

    ldshake_event_save_data = event.data;

    //ajax save
    try {
        if(data === null)
            throw "flow_data json not valid"
        var flow_data_string = JSON.stringify(data);
    } catch(error_message) {
        ldshakeSendSaveErrorMessage(ldshake_event_save_data, error_message);
        return false;
    }

    var form_object = {
        "flow_data" : flow_data_string,
        "ldshake_doc_id" :  ldshake_doc_id,
        "ldshake_sectoken" : ldshake_sectoken,
        "ldshake_save" : true
    };

    $.post('ldshake_gui.php', form_object, function() {
        ldshakeSendSaveReadyMessage(ldshake_event_save_data);
    });
}
