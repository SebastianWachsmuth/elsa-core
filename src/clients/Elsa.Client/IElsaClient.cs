﻿using Elsa.Client.Services;

namespace Elsa.Client
{
    public interface IElsaClient
    {
        IActivitiesApi Activities { get; }
        IWorkflowDefinitionsApi WorkflowDefinitions { get; }
    }
}