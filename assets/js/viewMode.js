/**
 * Created by Laia on 05/12/2017.
 */


function readonly(state) { //state: true or false

    $('#students').prop("readonly", state);
    $('#subject').prop("readonly", state);
    $('#info').prop("readonly", state);
    $('#problem').prop("readonly", state);
    $('#questions').prop("readonly", state);
    $('#intervention').prop("readonly", state);
    //intervention_checklist
        $('#pyramidapp').prop("disabled", state);
        $('#ldfeedback').prop("disabled", state);
        $('#googleforms').prop("disabled", state);
        $('#kahoot').prop("disabled", state);
        $('#edpuzzle').prop("disabled", state);
        $('#padlet').prop("disabled", state);
        $('#socrative').prop("disabled", state);
        $('#other_tools').prop("disabled", state);
    $('#evaluation').prop("readonly", state);
    //evaluation_checklist
        $('#pyramidapp_analytics').prop("disabled", state);
        $('#ldfeedback_analytics').prop("disabled", state);
        $('#googleforms_analytics').prop("disabled", state);
        $('#kahoot_analytics').prop("disabled", state);
        $('#edpuzzle_analytics').prop("disabled", state);
        $('#padlet_analytics').prop("disabled", state);
        $('#socrative_analytics').prop("disabled", state);
        $('#other_tools_analytics').prop("disabled", state);
    $('#pyramidapp_analytics_text').prop("readonly", state);
    $('#ldfeedback_analytics_text').prop("readonly", state);
    $('#googleforms_analytics_text').prop("readonly", state);
    $('#other_analysis_text').prop("readonly", state);
    $('#reflection').prop("readonly", state);
    $('#changes').prop("readonly", state);
    //changes_checklist
        $('#change_time').prop("disabled", state);
        $('#change_participation').prop("disabled", state);
        $('#change_instructions').prop("disabled", state);
        $('#change1').prop("disabled", state);
        $('#change2').prop("disabled", state);
        $('#change3').prop("disabled", state);

        //files
    if(state) {
        $('input[type=file]').hide();
        $('[for=File1]').hide();
        $('#fileHelp, #fileHelp2, #fileHelp3').hide();
    }
}
