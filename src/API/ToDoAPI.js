import API from './API'

const ToDoAPI = {
  /// 保存todo
  SaveToDo (idStr, categoryIdStr, title, content) {
    let param = {
      'TargetClass': 'YunToDo',
      'Method': 'SaveToDo',
      'Param': {},
      'InputParamArray': [idStr, categoryIdStr, title, content]
    }
    return API.POST(param)
  },
  /// 保存todo
  RemoveToDo (idStr) {
    let param = {
      'TargetClass': 'YunToDo',
      'Method': 'RemoveToDo',
      'Param': {},
      'InputParamArray': [idStr]
    }
    return API.POST(param)
  },
  /// 保存todo
  FinishToDo (idStr) {
    let param = {
      'TargetClass': 'YunToDo',
      'Method': 'FinishToDo',
      'Param': {},
      'InputParamArray': [idStr]
    }
    return API.POST(param)
  },
  LoadList (categoryIdStr) {
    let param = {
      'TargetClass': 'YunToDo',
      'Method': 'LoadList',
      'Param': {},
      'InputParamArray': [ categoryIdStr ]
    }
    return API.POST(param)
  }
}
export default ToDoAPI
