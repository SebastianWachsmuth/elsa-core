﻿// <auto-generated />
using Elsa.CustomActivities.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Elsa.CustomActivities.EntityFrameworkCore.Sqlite.Migrations
{
    [DbContext(typeof(CustomActivitiesDbContext))]
    partial class CustomActivitiesDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.3");

            modelBuilder.Entity("Elsa.CustomActivities.Entities.ActivityDefinition", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("CreatedAt")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Data")
                        .HasColumnType("TEXT");

                    b.Property<string>("DefinitionId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsLatest")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsPublished")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("Version")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("IsLatest")
                        .HasDatabaseName("IX_ActivityDefinition_IsLatest");

                    b.HasIndex("IsPublished")
                        .HasDatabaseName("IX_ActivityDefinition_IsPublished");

                    b.HasIndex("Name")
                        .HasDatabaseName("IX_ActivityDefinition_Name");

                    b.HasIndex("Version")
                        .HasDatabaseName("IX_ActivityDefinition_Version");

                    b.HasIndex("DefinitionId", "Version")
                        .IsUnique()
                        .HasDatabaseName("IX_ActivityDefinition_DefinitionId_Version");

                    b.ToTable("ActivityDefinitions");
                });
#pragma warning restore 612, 618
        }
    }
}
